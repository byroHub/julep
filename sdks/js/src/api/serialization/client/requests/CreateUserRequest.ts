/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as JulepApi from "../../../api";
import * as core from "../../../core";

export const CreateUserRequest: core.serialization.Schema<
    serializers.CreateUserRequest.Raw,
    JulepApi.CreateUserRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    about: core.serialization.string().optional(),
    additionalInformation: core.serialization.property(
        "additional_information",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../..")).CreateAdditionalInfoRequest))
            .optional()
    ),
});

export declare namespace CreateUserRequest {
    interface Raw {
        name?: string | null;
        about?: string | null;
        additional_information?: serializers.CreateAdditionalInfoRequest.Raw[] | null;
    }
}
