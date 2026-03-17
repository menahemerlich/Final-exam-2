
export function launcherTypes(data) {
    const { name, rocketType, latitude, longitude, city } = data
    if (name &&
        rocketType &&
        latitude &&
        longitude &&
        city &&
        typeof name === 'string' &&
        typeof rocketType === 'string' &&
        typeof Number(latitude) === 'number' &&
        typeof Number(longitude) === 'number' &&
        typeof city === 'string'

    ) {
        return true
    }
    return false
}

export function userTypes(data) {
    const { userName, password, email, userType } = data
    if (userName &&
        password &&
        email &&
        userType &&
        typeof userName === 'string' &&
        typeof password === 'string' &&
        typeof email === 'string' &&
        typeof userType === 'string'
    ) {
        return true
    }
    return false
}