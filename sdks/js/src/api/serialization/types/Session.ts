/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";

export const Session: core.serialization.ObjectSchema<serializers.Session.Raw, JulepApi.Session> =
    core.serialization.object({
        id: core.serialization.string(),
        userId: core.serialization.property("user_id", core.serialization.string()),
        agentId: core.serialization.property("agent_id", core.serialization.string()),
        situation: core.serialization.string().optional(),
        summary: core.serialization.string().optional(),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    });

export declare namespace Session {
    interface Raw {
        id: string;
        user_id: string;
        agent_id: string;
        situation?: string | null;
        summary?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
