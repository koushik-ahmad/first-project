/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // Extract the value within double quotes
  const match = err.message.match(/"([^"]*)"/);

  // Check if there is a match and extract the value
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists!`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid id',
    errorSources,
  };
};

export default handleDuplicateError;
