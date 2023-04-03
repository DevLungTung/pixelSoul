import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { PrismaClient } from '@prisma/client'
import { PrismaService } from '../prisma.service'

describe('UserService', () => {
  let service: UserService
  let prisma

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService]
    }).compile()

    service = module.get<UserService>(UserService)
    prisma = module.get<PrismaClient>(PrismaService)
  })
  afterEach(async () => {
    jest.resetModules()
    await prisma.$disconnect()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})