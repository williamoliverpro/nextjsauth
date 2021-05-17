import { useContext } from "react"

import { AuthContexts } from "../contexts/AuthContexts"
import { validateUserPermissions } from '../utils/validateUserPermissions'

type UseCanParams = {
    permissions?: string[]
    roles?: string[]
}

export function useCan({ permissions, roles }: UseCanParams) {
    const { user, isAuthenticated } = useContext(AuthContexts)

    if (!isAuthenticated) {
        return false
    }

    const userHasValidPermissions = validateUserPermissions({
        user,
        permissions,
        roles
    })

    return userHasValidPermissions
}