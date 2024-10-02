import { Profile, ProfileDraft } from '../../../types/Profile'
import Button from '../UI/Button/Button'
import TextBox from '../UI/TextBox/TextBox'

interface Props {
  profile?: Profile
  handleSubmit: (profile: Profile | ProfileDraft) => void
}

function ProfileForm(props: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const nickname = formData.get('nickname') as string
    const isPublic = Boolean(formData.get('public'))

    const form = {
      firstName: firstName,
      lastName: lastName,
      nickname: nickname,
      public: isPublic,
    }

    props.handleSubmit(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="space-y-2">
          <label htmlFor="nickname">Nickname *</label>
          <TextBox
            type="text"
            name="nickname"
            id="nickname"
            required
            defaultValue={props.profile?.nickname}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="first-name">First Name *</label>
          <TextBox
            type="text"
            name="firstName"
            id="first-name"
            required
            defaultValue={props.profile?.firstName}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name">Last Name</label>
          <TextBox
            type="text"
            name="lastName"
            id="last-name"
            defaultValue={props.profile?.lastName}
          />
        </div>
        <div className="space-x-2">
          <input
            type="checkbox"
            name="public"
            id="public"
            defaultChecked={props.profile?.public}
          />
          <label htmlFor="public">Visible to everyone</label>
        </div>
        <div className="mx-auto text-center">
          <Button>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileForm
