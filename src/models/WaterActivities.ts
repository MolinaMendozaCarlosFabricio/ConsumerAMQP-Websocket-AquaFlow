import * as z from "zod/v4";

export const WaterActivitiesSchema = z.object({
    water_activity: z.string(),
    percentage: z.number(),
});