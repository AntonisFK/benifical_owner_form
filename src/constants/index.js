export const individualFormInputs = [
    {
      title: 'Last Name',
      name: 'lastName',
      size: 'md',
      validation: {
        required: true,
      }
    },
    {
      title: 'First Name',
      name: 'firstName',
      size: 'md',
      validation: {
        required: true,
      }
    },
    {
      title: 'Middle Initial',
      name: 'middleInitial',
      size: 'sm'
    },
    {
      title: 'Date of birth',
      name: 'dob',
      size: 'md',
      validation: {
        required: true,
      }
    },
    {
      title: 'Address',
      name: 'address',
      size: 'lg',
      validation: {
        required: true,
      }
    },
    {
      title: 'City',
      name: 'city',
      size: 'lg',
      validation: {
        required: true,
      }
    },
    {
      title: 'State',
      name: 'state',
      size: 'sm',
      validation: {
        required: true,
      }
    },
    {
      title: 'ZIP/Postal Code',
      name: 'zip',
      size: 'md',
      validation: {
        required: true,
      }
    },
    {
      title: 'Country',
      name: 'country',
      size: 'md',
      validation: {
        required: true,
      }
    },
    {
      title: 'SSN (U.S Persons)',
      name: 'ssn',
      size: 'lg',
      type: 'password',
      validation: {}
    },
    {
      title: 'For Non-U.S. persons (SSN, Passport Number or other similar identification number)',
      name: 'identificationNumber',
      size: 'lg',
      validation: {}
    },
    {
      title: 'Country of issuance',
      name: 'countryIssuance',
      size: 'lg',
      validation: {}
    },
  ];


  export const entityInputs = [
    {
      title: 'Last Name and title of Natural Person Opening Account',
      name: 'lastName',
      size: 'lg',
      validation: {
        required: true,
      }
    },
    {
      title: 'First Name',
      name: 'firstName',
      size: 'md',
      validation: {
        required: true,
      }
    },
    {
      title: 'Middle Initial',
      name: 'middleInitial',
      size: 'sm'
    },
    {
      title: 'Name and type of Legal Entity for Which the Account is Being Opened',
      name: 'entityName',
    },
    {
      title: 'Legal Entity Address',
      name: 'address',
      size: 'lg'
    },
    {
      title: 'City',
      name: 'city',
      size: 'lg',
      validation: {
        required: true,
      }
    },
    {
      title: 'State',
      name: 'state',
      size: 'sm',
      validation: {
        required: true,
      }
    },
    {
      title: 'ZIP/Postal Code',
      name: 'zip',
      size: 'sm',
      validation: {
        required: true,
      }
    },
  ]