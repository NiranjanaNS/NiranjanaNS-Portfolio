import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AnalyticsModule } from "./modules/analytics/analytics.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BlogModule } from "./modules/blog/blog.module";
import { ContactModule } from "./modules/contact/contact.module";
import { EducationModule } from "./modules/education/education.module";
import { ProjectsModule } from "./modules/projects/projects.module";
import { SkillsModule } from "./modules/skills/skills.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    ProjectsModule,
    SkillsModule,
    EducationModule,
    ContactModule,
    AnalyticsModule,
    BlogModule,
  ],
})
export class AppModule {}
