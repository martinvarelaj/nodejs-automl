// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

async function main(
  projectId = 'YOUR_PROJECT_ID',
  computeRegion = 'YOUR_REGION',
  modelId = 'YOUR_MODEL',
  filter = 'YOUR_FILTER'
) {
  // [START automl_translation_list_model_evaluations]
  const automl = require('@google-cloud/automl');

  const client = new automl.AutoMlClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const projectId = `The GCLOUD_PROJECT string, e.g. "my-gcloud-project"`;
  // const computeRegion = `region-name, e.g. "us-central1"`;
  // const modelId = `id of the model, e.g. “ICN12345”`;
  // const filter = `filter expressions, must specify field, e.g. “imageClassificationModelMetadata:*”`;

  // Get the full path of the model.
  const modelFullId = await client.modelPath(projectId, computeRegion, modelId);

  // List all the model evaluations in the model by applying filter.
  const [elements] = client.listModelEvaluations({
    parent: modelFullId,
    filter: filter,
  });
  console.log(`List of model evaluations:`);
  elements.forEach(element => {
    console.log(element);
  });

  // [END automl_translation_list_model_evaluations]
}

main(...process.argv.slice(2)).catch(err => console.error(err));
