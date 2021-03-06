import { Contact } from "~domain/Models/Contact";
import { ContactRepositoryProps } from "~repository/Contact/type";
import { CreateContactCommand } from "./CreateContactCommand";
import { CreateContactServiceProps } from "./type";

export class CreateContactService implements CreateContactServiceProps.Impl {
  private readonly contactRepository: ContactRepositoryProps.Impl;

  constructor(contactRepository: ContactRepositoryProps.Impl) {
    this.contactRepository = contactRepository;
  }

  async handle(command: CreateContactCommand) {
    const contact = new Contact({
      name: command.name,
      email: command.email,
      message: command.message,
      createdAt: new Date()
    });

    await this.contactRepository.create(contact);
  }
}
