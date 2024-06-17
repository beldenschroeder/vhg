#!/bin/sh

SERVICE_NAME="vhgapp"
SERVICE_TAG="v1"
ERC_REGISTRY_URI="737094223358.dkr.ecr.us-east-1.amazonaws.com"
ERC_REPO_URL="${ERC_REGISTRY_URI}/${SERVICE_NAME}"

if [ "$1" = "build" ];then
  echo "Building the application..."
  # TODO: I need to add the build command here
elif [ "$1" = "dockerize" ];then
  echo "Dockerizing the application..."
  # TODO: Remove commented out line below later as `get-login` is deprecated.
  # $(aws ecr get-login --no-include-email --region us-east-1)
  aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${ERC_REGISTRY_URI}
  aws ecr create-repository --repository-name ${SERVICE_NAME:?} || true
  docker build -f apps/vhg/Dockerfile.prod -t ${SERVICE_NAME}:${SERVICE_TAG} .
  docker tag ${SERVICE_NAME}:${SERVICE_TAG} ${ERC_REPO_URL}:${SERVICE_TAG}
  docker push ${ERC_REPO_URL}:${SERVICE_TAG}
elif [ "$1" = "plan" ];then
  echo "Planning the deployment..."
  terraform -chdir="./terraform/application" init -backend-config="app-prod.config"
  terraform -chdir="./terraform/application" plan -replace="aws_ecs_task_definition.vhgapp_task_definition" -var-file="production.tfvars" -var "docker_image_url=${ERC_REPO_URL}:${SERVICE_TAG}"
elif [ "$1" = "deploy" ];then
  echo "Deploying the application..."
  terraform -chdir="./terraform/application" init -backend-config="app-prod.config"
  # TODO: Remove commented out line below later as `taint` is deprecated.
  # terraform -chdir="./terraform/application" taint -allow-missing aws_ecs_task_definition.vhgapp_task_definition
  terraform -chdir="./terraform/application" apply -replace="aws_ecs_task_definition.vhgapp_task_definition" -var-file="production.tfvars" -var "docker_image_url=${ERC_REPO_URL}:${SERVICE_TAG}" -auto-approve
elif  [ "$1" = "destroy" ];then
  echo "Destroying the application..."
  terraform -chdir="./terraform/application" init -backend-config="app-prod.config"
  terraform -chdir="./terraform/application" destroy -var-file="production.tfvars" -var "docker_image_url=${ERC_REPO_URL}:${SERVICE_TAG}" -auto-approve
fi