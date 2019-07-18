import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Formik } from 'formik'
import { Form, Label, Input } from 'components/form'

import { getEnterpriseQuery } from 'graphql/queries/enterprise'
import { updateEnterpriseMutation } from 'graphql/mutations/enterprise'

const AccountSettingsForm = () => {
  const getEnterprise = useQuery(getEnterpriseQuery, {
    variables: {
      id: '5b4a48b4c7391171a06ce35c', // for now
    },
  })

  const [mutation, { loading }] = useMutation(updateEnterpriseMutation)

  const handleSubmitForm = async ({ values, mutation }) => {
    const submitResult = await mutation({
      variables: {
        id: values.id,
        name: values.name,
        description: values.description,
      },
    })

    if (submitResult) {
      console.log(submitResult)
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async values =>
        handleSubmitForm({
          values,
          mutation,
        })
      }
      render={({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="id">ID</Label>
          <Input type="text" name="id" value={values.id} onChange={handleChange} />
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" value={values.name} onChange={handleChange} />
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            Update
          </button>
        </Form>
      )}
    />
  )
}

export default AccountSettingsForm
