const logError = (name: string, message: string) => {
    console.error(`${new Date()} Error in ${name}: ${message}`);
};

export default logError;
