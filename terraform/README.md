# Infrastucture for Von Herff Gallery

## Build the Infrastucture

Under _terraform/infrastructure/_, run

```console
terraform init -backend-config="infrastructure-prod.config"
terraform plan -var-file="production.tfvars"
terraform apply -var-file="production.tfvars"
```

Under _terraform/platform/_, run

```console
terraform init -backend-config="platform-prod.config"
terraform plan -var-file="production.tfvars"
terraform apply -var-file="production.tfvars"
```

## Build the Application

Ensure your environment configuration is set to production. See section _Environment Configuration_ in the README.md file in the root project directory.

At the root project directory, run

```console
pnpm i
pnpm exec nx build vhg
```

## Deploy the Application

To deploy the application, at the root project directory, run

```console
sh deploy.sh dockerize
sh deploy.sh plan
sh deploy.sh deploy
```

## Destroy the Application

To destoy the application, at the root project directory, run

```console
sh deploy.sh destroy
```

## Tear Down the Infrastructure

Under _terraform/platform/_, run

```console
terraform destroy -var-file="production.tfvars"
```

Under _terraform/infrastructure/_, run

```console
terraform destroy -var-file="production.tfvars"
```