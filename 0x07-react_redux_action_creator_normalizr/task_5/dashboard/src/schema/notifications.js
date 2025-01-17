import { schema, normalize } from 'normalizr';

const notification = new schema.Entity('notifications');
const notificationsSchema = [notification];

export const notificationsNormalizer = (data) => normalize(data, notificationsSchema).entities.notifications;
