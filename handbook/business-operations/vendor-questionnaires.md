# Vendor questionnaires

## Scoping
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Will Fleet allow us to conduct our own penetration test?   | Yes                                                               |


## Application security
Please also see [Application security](https://fleetdm.com/docs/using-fleet/application-security#application-security)
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does Fleet use any third party code, including open source code in the development of the scoped application(s)? If yes, please explain.   | Yes. All third party code is managed through standard dependency management tools (Go, Yarn, NPM) and audited for vulnerabilities using GitHub vulnerability scanning.                                                                                                                              |

## Data security
Please also see [Data security](https://fleetdm.com/handbook/business-operations/security-policies#data-management-policy)
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Should the need arise during an active relationship, how can our Data be removed from the Fleet's environment?   | Customer data is primarially stored in RDS, S3, and Cloudwatch logs. Deleting these resources will remove the vast majority of customer data. Fleet can take further steps to remove data on demand, including deleting individual records in monitoring systems if requested.                                                                                                                              |
| Does Fleet support secure deletion (e.g., degaussing/cryptographic wiping) of archived and backed-up data as determined by the tenant? | Since all data is encrypted at rest, Fleet's secure deletion practice is to delete the encryption key. Fleet does not host customer services on-premise, so hardware specific deletion methods (such as degaussing) do not apply. |
| Does Fleet have a Data Loss Prevention (DLP) solution or compensating controls established to mitigate the risk of data leakage? | In addition to data controls enforced by Google Workspace on corporate endpoints, Fleet applies appropiate security controls for data depending on the requirements of the data, including but not limited to minimum access requirements. |
| Can your organization provide a certificate of data destruction if required?    |     No, physical media related to a certificate of data destruction  is managed by AWS. Media storage devices used to store customer data are classified by AWS as critical and treated accordingly, as high impact, throughout their life-cycles. AWS has exacting standards on how to install, service, and eventually destroy the devices when they are no longer useful. When a storage device has reached the end of its useful life, AWS decommissions media using techniques detailed in NIST 800-88. Media that stored customer data is not removed from AWS control until it has been securely decommissioned.   |

## Service monitoring and logging
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does your service system/application write/export logs to a SIEM or cloud-based log management solution?    |   Yes, Fleet Cloud service logs are written to AWS Cloudwatch |
| How are logs managed (stored, secured, retained)?    |   Alerting triggers manual review of the logs on an as-needed basis. Logs are retained for a period of 30 days by default. Logging access is enabled by IAM rules within AWS.   |
| Can Fleet customers access service logs?    |    Logs will not be accessible by default, but can be provided upon request. |

## Encryption and key management
Please also see [Encryption and key management](https://fleetdm.com/handbook/business-operations/security-policies#encryption-policy)
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does Fleet have a cryptographic key management process (generation, exchange, storage, safeguards, use, vetting, and replacement), that is documented and currently implemented, for all system components? (e.g. database, system, web, etc.)   | All data is encrypted at rest using methods appropiate for the system (ie KMS for AWS based resources). Data going over the internet is encrypted using TLS or other appropiate transport security. |
| Does Fleet allow customers to bring and their own encryption keys? | By default, Fleet does not allow for this, but if absolutely required, Fleet can accommodate this request. |

## Governance and risk management
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does Fleet have documented information security baselines for every component of the infrastructure (e.g., hypervisors, operating systems, routers, DNS servers, etc.)?  | Fleet follows best practices for the given system. For instance, with AWS we utilize AWS best practices for security including GuardDuty, CloudTrail, etc.                                                                |

## Business continuity
Please also see [Business continuity](https://fleetdm.com/handbook/business-operations/security-policies#business-continuity-plan)
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Please provide your application/solution disaster recovery RTO/RPO | RTO and RPO intervals differ depending on the service that is impacted. Please refer to https://fleetdm.com/handbook/business-operations/security-policies#business-continuity-and-disaster-recovery-policy                                                               |

## Network security
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does Fleet have the following employed in their production environment? File integrity Monitoring (FIM), Host Intrusion Detection Systems (HIDS), Network Based Indrusion Detection Systems (NIDS), OTHER?   | Fleet utilizes several security monitoring solutions depending on the requirements of the system. For instance, given the highly containerized and serverless environment, FIM would not apply. But, we do use tools such as (but not limited to) AWS GuardDuty, AWS CloudTrail, and VPC Flow Logs to actively monitor the security of our environments.                                                               |

## Privacy
Please also see [privacy](https://fleetdm.com/legal/privacy)
| Question | Answer                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Is Fleet a processor, controller, or joint controller in its relationship with its customer?  | Fleet is a processor.                                                               |

## Sub-processors
| Question | Answer |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does Fleet possess an APEC PRP certification issued by a certification body (or Accountability Agent)? If not, is Fleet able to provide any evidence that the PRP requirements are being met as it relates to the Scoped Services provided to its customers? | Fleet has not undergone APEC PRP certification but has undergone an external security audit that included pen testing.  |

<meta name="maintainedBy" value="dherder">
<meta name="title" value="📃 Vendor questionnaires">
