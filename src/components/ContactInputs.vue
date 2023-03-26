<template>
  <div class="contactInputs">
    <div class="contactInputs__Form">
      <form action="" method="post">
        <label for="name">Name</label>
        <input type="text" name="name" required />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
        />
        <label for="message">Message</label>
        <textarea
          id="message"
          placeholder="Your message here..."
          rows="7"
          cols=""
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="contactInputs__Map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16429.178826310854!2d-76.15708971284536!3d43.28712382437092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1677441136451!5m2!1sen!2srs"
        width="100%"
        height="100%"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contactInputs {
  padding-top: 40px;
  padding-bottom: 80px;
  display: flex;
  form {
    display: grid;
  }

  label {
    font-size: 20px;
    color: $white;
    margin-bottom: 10px;
  }
  input {
    background-color: transparent;
    border: 1px solid $white;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 4px;
    color: $white;
    margin-bottom: 10px;

    transition: all 0.3s ease-out;
    &:focus {
      outline: none;
      border-color: $purple;
    }
  }
  textarea {
    background-color: transparent;
    border: 1px solid $white;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 4px;
    color: $white;
    margin-bottom: 20px;

    transition: all 0.3s ease-out;
    &:focus {
      outline: none;
      border-color: $purple;
    }
  }
  button {
    width: fit-content;
    padding: 10px 20px;
    font-size: 14px;
    font-family: "Rajdhani";
    font-weight: 400;
    color: $white;
    letter-spacing: 2px;
    background-color: $purple;
    border-radius: 4px;
    border: 1px solid $purple;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
  button:hover {
    background-color: transparent;
  }
  &__Form {
    padding: 40px;
    width: 570px;
    height: 450px;
  }
  &__Map {
    width: 570px;
    height: 450px;
  }
}

/* mobile responsive */
@media (max-width: $mobile) {
  .contactInputs {
    flex-direction: column;
    padding-top: 0;

    &__Form {
      width: 100%;
      height: 100%;
    }
    label {
      font-size: 18px;
    }
    &__Map {
      width: 100%;
      height: 50vh;
    }
  }
}
</style>
