import { useSelector } from "react-redux"

export const useUserPagination = (page = 0, limit = 5) => {
    const { users: allUsers = [] } = useSelector(state => state.user)

    const offset = page * limit
    const users = allUsers.slice(offset, offset + limit)

    const pageCount = Math.ceil(allUsers.length / limit)


    return { users, isFirtPage: page <= 0, isLastPage: (page + 1) >= pageCount  }
}