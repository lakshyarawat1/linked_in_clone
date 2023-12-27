import uuid from 'react-uuid'

export const getUniqueId = () => {
    const id = uuid();

    return id;
}