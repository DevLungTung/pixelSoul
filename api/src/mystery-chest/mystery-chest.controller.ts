import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MysteryChestService } from './mystery-chest.service'
import { OpenChestDto } from './dto/mystery-chest.open.dto'
@ApiTags('mystery chest')
@Controller({ version: '1', path: 'mystery-chest' })
export class MysteryChestController {
  constructor(private mysteryChestService: MysteryChestService) {}
  @Get(':auth0Sub')
  async findAllByUser(@Param('auth0Sub') auth0Sub: string) {
    return await this.mysteryChestService.findAll(auth0Sub)
  }
  @Post('claim/:auth0Sub')
  async claim(@Param('auth0Sub') auth0Sub: string) {
    return await this.mysteryChestService.increase(auth0Sub)
  }
  @Post('open')
  async open(@Body() data: OpenChestDto) {
    return await this.mysteryChestService.openMysteryChest(data)
  }
}