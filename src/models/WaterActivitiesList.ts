import * as z from "zod/v4";
import { WaterActivitiesSchema } from "./WaterActivities";

export const WaterActivitiesListSchema = z.object({
    user_id: z.string(),
    filtrer_id: z.string(),
    water_activities_list: z.array(WaterActivitiesSchema),
});

export type WaterActivitiesList = z.infer<typeof WaterActivitiesListSchema>