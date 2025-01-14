import React, { useEffect, useState } from 'react';
import moment from 'moment';

export const Comments = () => {
  const [
    comments,
    // re-enable this once getComments is defined and working
    // setComments,
  ] = useState([]);

  useEffect(() => {
    // getComments() was not defined so it has been
    // commented out so the application doesn't throw errors
    // getComments(slug).then((result) => {
    //   setComments(result);
    // });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {
                  // parse was not defined so it has been
                  // commented out to disable it for now
                  // parse(comment.comment)
                }
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
