import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 새 게시글 생성
async function createPost(data) {
  return await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: data.authorId,
    },
  });
}

// 모든 게시글 조회
async function findAllPosts() {
  return await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

// ID로 특정 게시글 조회
async function findPostById(id) {
  return await prisma.post.findUnique({
    where: { id: Number(id) },
  });
}

// 게시글 수정
async function updatePost(id, data) {
  return await prisma.post.update({
    where: { id: Number(id) },
    data: {
      title: data.title,
      content: data.content,
    },
  });
}

// 게시글 삭제
async function deletePost(id) {
  return await prisma.post.delete({
    where: { id: Number(id) },
  });
}

// 객체로 묶어서 export
export const postRepository = {
  createPost,
  findPostById,
  findAllPosts,
  updatePost,
  deletePost,
};
