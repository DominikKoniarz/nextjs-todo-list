import prisma from "./prisma";

const getAllUsersCount = async () => {
    return prisma.user.count();
};

export default getAllUsersCount;
