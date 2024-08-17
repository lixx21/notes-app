import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private readonly prisma:PrismaService){}
  create(createNoteDto: CreateNoteDto) {
    try{
      const result = this.prisma.notes.create({
        data: createNoteDto
      });
      return result
    }
    catch(error){
      return {
        "status": "failed",
        "message": error.message
      }
    }
     
  }

  async findAll() {
    try{
      const result = this.prisma.notes.findMany();
      return result
    }
    catch(error){
      return {
        "status": "failed",
        "message": error.message
      }
    }
  }

  findOne(id: number) {
    try{
      const result = this.prisma.notes.findUnique({
        where: {id},
      });
      return result
    }
    catch(error){
      return {
        "status": "failed",
        "message": error.message
      }
    }

    
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {

    try{
      const result = this.prisma.notes.update({
        where: {id},
        data: updateNoteDto
      });
      return result
    }
    catch(error){
      return {
        "status": "failed",
        "message": error.message
      }
    } 
  }

  async remove(id: number) {

    try{
      const result = await this.prisma.notes.delete({
        where: {id},
      });
      return result
    }
    catch(error) {
      return {"status": "failed",
      "message": error.message
      }
    }
  }
}
