import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from "@aws-cdk/pipelines";

export class CdkpipelinesDemoPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const pipeline = new CodePipeline(this, 'Pipeline', {
            pipelineName: 'MyServicePipeline',
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('OWNER/REPO', 'main'),

                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth'
                ]
            })
        })

    }
}