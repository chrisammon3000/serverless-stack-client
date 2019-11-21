export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "serverless-notes-s3uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kz9sytemkc.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_kFLpKfK22",
    APP_CLIENT_ID: "78ch1bcjj1fuqrmm2qgeem03ij",
    IDENTITY_POOL_ID: "us-east-1:13db9c56-f081-4279-ba36-19b6c6cf05af"
  }
};
