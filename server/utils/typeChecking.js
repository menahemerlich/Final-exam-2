
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
    const { userName, password, email, user_type, last_login } = data
    if (userName &&
        password &&
        email &&
        user_type &&
        last_login &&
        typeof userName === 'string' &&
        typeof password === 'string' &&
        typeof email === 'string' &&
        typeof user_type === 'string' &&
        typeof last_login === 'string'

    ) {
        return true
    }
    return false
}