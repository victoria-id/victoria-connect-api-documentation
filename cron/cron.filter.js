{
 input:
  {


  },

 output:
  {

   detail:
    {
     cron:
      [
        {
         _id: 'id',
         id: true,

         key: true,

         task:
          [
            {
             name: true,

             type: true,
             state: true,

             fault: true,

             unit:
              [
                {
                 name: true,

                 // function
                 // input
                 // output

                 node: true,

                 time: false,
                },
              ],

             time: false,
            },
          ],

         log: true,

         time: true,
        },
      ],

    },

  },
}