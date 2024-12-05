import { schema, normalize } from 'normalizr';

const course = new schema.Entity('courses');
const coursesSchema = [course];

export const coursesNormalizer = (data) => normalize(data, coursesSchema).entities.courses;
