export interface postInterface {
    postId: string;
    activities: Array<any>;
    post: {
        id: string;
        ownerId: string;
        ownerUserType: string;
        body: string;
        medias: Array<{
            url: string;
            type: string;
            secondaryUrl?: string;
        }>;
        tags: Array<string>;
        hashtags: Array<string>;
        mentions: Array<any>;
        highlighted: boolean;
        hidden: boolean;
        ownerProfileInfo: {
            userId: string;
            username: string;
            name: string;
            surname: string;
            imageUrl: string;
            croppedImageUrl: string;
            occupationId: string;
            occupationName: string;
            privateProfile: boolean;
            allowOthersToShareYourPosts: boolean;
            allowOthersToTagOrMentionYou: boolean;
        };
        createdDate: string;
        lastModifiedDate: string;
        hideIt: boolean;
        follow: boolean;
        likeActionCounter: string;
        edited: boolean;
        deleted: boolean;
        deactivated: boolean;
        type: string;
    };
}