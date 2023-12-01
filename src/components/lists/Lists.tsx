import styles from './list.module.scss'
import Card from "@designSystem/card/Card.tsx";
import {usersInterface} from "@/utils/Interfaces/usersInterface.ts";
import UserItem from "@components/userItem/UserItem.tsx";
import UserCard from "@components/userCard/UserCard.tsx";
import Tag from "@designSystem/tag/Tag.tsx";
import PostItem from "@components/postItem/PostItem.tsx"
import {useQuery} from "@tanstack/react-query";
import {useEffect, useRef, useState} from "react";
import {getPosts} from "@/utils/api/getPosts/getPosts.ts";
import {postInterface} from "@/utils/Interfaces/postInterface.ts";
import {getUsers} from "@/utils/api/getUsers/getUsers.ts";

const Lists = () => {

    const [selectedItem, setSelectedItem] = useState<usersInterface | null>(null)
    const [selectedTag, setSelectedITag] = useState<string>('All')
    const detailsRef = useRef<HTMLDivElement | null>(null);
    const tags = ['All', 'Posts', 'Highlights']

    //API
    const {data: users, isLoading: usersLoading, error: usersError} = useQuery({
        queryKey: ["getUsersList"],
        queryFn: getUsers,
    });

    const {
        data: posts,
        isLoading: postsLoading,
        error: postsError,
        isFetching: isFetchingPosts,
        refetch: refetchPosts
    } = useQuery({queryKey: ["getPersonList"], queryFn: () => getPosts(selectedItem?.id ?? ""), enabled: false})

    //API

    useEffect(() => {
        if (!selectedItem && users) {
            setSelectedItem(users?.data?.content?.[0])
        }
        if (selectedItem && !isFetchingPosts) {
            refetchPosts()
            detailsRef?.current?.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [selectedItem, users])


    if (usersLoading) {
        return <div>Loading...</div>;
    }

    if (usersError) {
        return <div>Error loading data {usersError.message}</div>;
    }
    return (<div className={styles['box']}>


        <div  data-testid={'user-list'} className={styles['box__list']}>

            <Card showHover={false}>
                <div className={styles['box__list__summary']}>
                    <span className={styles['box__list__summary__title']}>Top suggestions</span>
                    <span className={styles['box__list__summary__value']}>{users?.data?.totalElements} results</span>
                </div>
            </Card>
            {users?.data?.content?.map((item: usersInterface, index: number) => (
                <UserItem  key={'list-item-' + index} item={item} selectedItem={selectedItem}
                          onSelect={(item) => {
                              setSelectedItem(item)
                          }}/>
            ))}

        </div>
        <div ref={detailsRef} className={styles['box__details']}>
            <UserCard item={selectedItem}/>
            <div className={styles['box__details--tags']}>
                {tags.map((item, index) => (
                    <Tag key={'tag-' + index} text={item} selectedTag={selectedTag} onSelect={(data:string) => {
                        setSelectedITag(data)
                    }}/>
                ))}

            </div>
            {(postsLoading) && <div>Loading...</div>}

            {(postsError) && <div>Error loading data</div>}

            {posts?.data?.content?.map((item: postInterface, index: number) => (
                <PostItem key={'post-' + index} item={item}/>
            ))}
        </div>
        <div/>
    </div>)
}
export default Lists