import {Customer} from "../model/customer";
import {CustomerDto} from "../dto/customer.dto";

const customerDtoMapper = (input:Customer):CustomerDto => {
    return {
        id:input.id,
        mail:input.mail,
        name:input.name,
        surname:input.surname,
        age:input.age,
        role: input.role
    }
}

export default customerDtoMapper;
