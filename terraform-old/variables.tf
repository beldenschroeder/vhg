variable "region" {
  description = "Region in which AWS Resources to be created"
  default = "us-east-1"
  type        = string
}

variable "access_key" {
  description = "AWS access key"
  type        = string
}

variable "secret_key" {
  description = "AWS secret key"
  type        = string
  
}

variable "cluster_name" {
  description = "EKS cluster name"
  default = "vhg-cluster"
  type = string
}