import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { CdkpipelinesDemoStack } from './cdkpipelines-demo-stack';

export class CdkpipelinesDemoStage extends Stage {
    public readonly urlOutput: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props)

        const service = new CdkpipelinesDemoStack(this, 'WebService')

        // expoes demop stack one level higher
        this.urlOutput = service.urlOutput;
    }

}