export function hasRole(userRole: string, roles: string[]) {
  return roles.includes(userRole)
}