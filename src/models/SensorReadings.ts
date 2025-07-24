import * as z from "zod/v4"; 

export const SensorReadingsSchema = z.object({
    id: z.number(),
    value: z.number(),
    date: z.string().datetime(),
    sensor_id: z.string(),
});