
      q
      .CreateIndex({
        name: "all_pages_reverse",
        // unique: false,
        // serialized: true,
        reverse: true,
        source: Collection("pages"),
        values: [
          {
            field: ["body", "date", "email", "name", "readableDate", "title"]
          }
        ]
      })
      .then(ret => console.log(ret)),