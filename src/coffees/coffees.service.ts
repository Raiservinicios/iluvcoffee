import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [];
    private idCounter = 1;

    findAll() {
        return this.coffees;
    }

    findOne(id: number) {
    const coffee = this.coffees.find(item => item.id === id);
        if (!coffee) { 
            throw new NotFoundException(`Café #${id} não encontrado`);
        }
        return coffee;
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        const newCoffee = { 
          id: this.idCounter++, 
          ...createCoffeeDto };
        this.coffees.push(newCoffee);
        return newCoffee;
    }

    update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            const index = this.coffees.findIndex(item => item.id === id);
            this.coffees[index] = { ...existingCoffee, ...updateCoffeeDto };
            return this.coffees[index];
        }
    }
    
    remove(id: number) {
        const index = this.coffees.findIndex(item => item.id === +id);
        if (index >= 0) {
            this.coffees.splice(index, 1);
        } else {
            throw new NotFoundException(`Não foi possível remover: Café #${id} não encontrado`);
        }
    }
}