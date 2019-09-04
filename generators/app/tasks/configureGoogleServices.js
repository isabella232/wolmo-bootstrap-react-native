const googleServicesContent = `
{
    "project_info": {
      "project_number": "131141576893",
      "firebase_url": "https://testcore-4f5e9.firebaseio.com",
      "project_id": "testcore-4f5e9",
      "storage_bucket": "testcore-4f5e9.appspot.com"
    },
    "client": [
      {
        "client_info": {
          "mobilesdk_app_id": "1:131141576893:android:1bea3c3cb4924149",
          "android_client_info": {
            "package_name": "com.test"
          }
        },
        "oauth_client": [
          {
            "client_id": "131141576893-hv79tvt9j3gnoosdbpb3qm20ukjmpg45.apps.googleusercontent.com",
            "client_type": 3
          }
        ],
        "api_key": [
          {
            "current_key": "AIzaSyAM1_DBBec9ZEy_iAJty6h3wzNGb5plrRE"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": [
              {
                "client_id": "131141576893-hv79tvt9j3gnoosdbpb3qm20ukjmpg45.apps.googleusercontent.com",
                "client_type": 3
              },
              {
                "client_id": "131141576893-3i2u499jp8iggj0dvc9f97o82llqbev3.apps.googleusercontent.com",
                "client_type": 2,
                "ios_info": {
                  "bundle_id": "com.wolox.itestHooks"
                }
              }
            ]
          }
        }
      },
      {
        "client_info": {
          "mobilesdk_app_id": "1:131141576893:android:35c057b099da0ff6",
          "android_client_info": {
            "package_name": "com.test"
          }
        },
        "oauth_client": [
          {
            "client_id": "131141576893-hv79tvt9j3gnoosdbpb3qm20ukjmpg45.apps.googleusercontent.com",
            "client_type": 3
          }
        ],
        "api_key": [
          {
            "current_key": "AIzaSyAM1_DBBec9ZEy_iAJty6h3wzNGb5plrRE"
          }
        ],
        "services": {
          "appinvite_service": {
            "other_platform_oauth_client": [
              {
                "client_id": "131141576893-hv79tvt9j3gnoosdbpb3qm20ukjmpg45.apps.googleusercontent.com",
                "client_type": 3
              },
              {
                "client_id": "131141576893-3i2u499jp8iggj0dvc9f97o82llqbev3.apps.googleusercontent.com",
                "client_type": 2,
                "ios_info": {
                  "bundle_id": "com.wolox.itestHooks"
                }
              }
            ]
          }
        }
      }
    ],
    "configuration_version": "1"
  }
`;

module.exports = function configureGoogleServices() {
  this.fs.write(`${this.projectName}/android/app/google-services.json`, googleServicesContent);
  let newGoogleServicesContent = this.fs.read(`${this.projectName}/android/app/google-services.json`);
  newGoogleServicesContent = newGoogleServicesContent.replace(`com.test`, `com.${this.projectName}`);
  this.fs.write(`${this.projectName}/android/app/google-services.json`, newGoogleServicesContent);
};
