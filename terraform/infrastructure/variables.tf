variable "region" {
  default = "us-east-1"
  description = "AWS region"
}

variable "vpc_cidr" {
  default = "10.0.0.0/16"
  description = "VPC CIDR block"
}

variable "public_subnet_1_cidr" {
  description = "Public subnet 1 CIDR block"
}

variable "public_subnet_2_cidr" {
  description = "Public subnet 2 CIDR block"
}

variable "public_subnet_3_cidr" {
  description = "Public subnet 3 CIDR block"
}

variable "private_subnet_1_cidr" {
  description = "Private subnet 1 CIDR block"
}

variable "private_subnet_2_cidr" {
  description = "Private subnet 2 CIDR block"
}

variable "private_subnet_3_cidr" {
  description = "Private subnet 3 CIDR block"
}