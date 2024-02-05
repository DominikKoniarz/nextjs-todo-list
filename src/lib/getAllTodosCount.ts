import prisma from "./prisma";

const getAllTodosCount = async () => {
    return prisma.todo.count();
};

export default getAllTodosCount;
