
export function typeChecking(data) {
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