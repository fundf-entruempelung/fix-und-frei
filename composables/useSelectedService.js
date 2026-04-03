export const useSelectedService = () => {
  const selectedService = useState('selectedService', () => '')

  const setSelectedService = (service) => {
    selectedService.value = service
  }

  const clearSelectedService = () => {
    selectedService.value = ''
  }

  return {
    selectedService,
    setSelectedService,
    clearSelectedService
  }
}
