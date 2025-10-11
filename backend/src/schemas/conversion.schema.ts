import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ConversionDocument = Conversion & Document;

@Schema({ timestamps: true })
export class Conversion {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  originalFileName: string;

  @Prop({ required: true })
  originalFileSize: number;

  @Prop({ required: true })
  originalFilePath: string;

  @Prop({ required: true })
  fromFormat: string;

  @Prop({ required: true })
  toFormat: string;

  @Prop({ 
    enum: ['pending', 'processing', 'completed', 'failed'], 
    default: 'pending' 
  })
  status: string;

  @Prop({ default: 0, min: 0, max: 100 })
  progress: number;

  @Prop()
  convertedFileName?: string;

  @Prop()
  convertedFileSize?: number;

  @Prop()
  convertedFilePath?: string;

  @Prop()
  downloadUrl?: string;

  @Prop()
  errorMessage?: string;

  @Prop()
  completedAt?: Date;

  @Prop({ default: false })
  isDownloaded: boolean;

  @Prop({ default: Date.now, expires: 604800 }) // Auto-delete after 7 days
  expiresAt: Date;
}

export const ConversionSchema = SchemaFactory.createForClass(Conversion);