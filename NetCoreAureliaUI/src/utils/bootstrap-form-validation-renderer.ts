import {
  ValidationRenderer,
  RenderInstruction,
  ValidateResult
} from 'aurelia-validation';

export class BootstrapFormValidationRenderer {
  render(instruction: RenderInstruction) {
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
      }
    }

    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
      }
    }
  }

  add(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    const formGroup = element.closest('.form-group');
    if (!formGroup) {
      return;
    }

    // add the has-danger class to the enclosing form-group div
    formGroup.classList.add('has-danger');

    // add help-block
    const message = document.createElement('div');
    message.className = 'form-control-feedback';
    message.textContent = result.message;
    message.id = `validation-message-${result.id}`;
    formGroup.lastElementChild.appendChild(message);

  }

  remove(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    const formGroup = element.closest('.form-group');
    if (!formGroup) {
      return;
    }

    // remove help-block
    const message = formGroup.lastElementChild.querySelector(`#validation-message-${result.id}`);
    if (message) {
        formGroup.lastElementChild.removeChild(message);

      // remove the has-danger class from the enclosing form-group div
        if (formGroup.lastElementChild.querySelectorAll('.form-control-feedback').length === 0) {
        formGroup.classList.remove('has-danger');
      }
    }
  }
}
