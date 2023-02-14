type Data = {
    params: {
        slug: string
    }
}

export function load({ params }: Data) {
      return {
        title: params.slug,
      }
}