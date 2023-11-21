
export const ApplicationRoutes = {
    pages: {
        dashboard: "/",
        documents: "/documents",
        images: "/images",
        videoAndAudio: "/video-audio",
        settings: "/settings",
        profile: "/settings/account",
        recentFiles: "/settings/recent-files",
        inviteFriend: "/settings/invite-friend",
        trashBin: "/settings/trash",
        history: "/settings/history",
        folders: "/storage/:provider",
        __folders: (providerId: number | string) => "/storage/" + providerId,
        folder: "/folders/:id",
        __folder: (id: number | string) => "/folders/"+id,
        activities: "/activities",
        users: "/users/:id",
        __userProfile: (id: string) => "/users/"+id
    }
}