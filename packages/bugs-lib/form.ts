export function enhance(form: HTMLFormElement) {
    async function handleSubmit(event: SubmitEvent) {
      event.preventDefault()
  
      const data = new FormData(form)
  
      await fetch(form.action, {
        method: form.method,
        body: data,
      })
    }
  
    form.addEventListener('submit', handleSubmit)
  
    return {
      destroy: () => {
        form.removeEventListener('submit', handleSubmit)
      },
    }
  }
  