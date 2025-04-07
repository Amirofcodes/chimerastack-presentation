import React from 'react';

const EnhancedPayment: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center relative">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-6 relative">
        <span className="relative">
          Système de Paiement
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-400 rounded-full"></div>
        </span>
      </h3>
      
      {/* Payment System Architecture - Inspired by Image 2 */}
      <div className="max-w-5xl w-full mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-x-auto">
        <div className="min-w-max">
          {/* Frontend Section */}
          <div className="mb-8">
            <div className="border-2 border-yellow-300 dark:border-yellow-700 rounded-lg p-3 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30">
              <p className="text-sm font-medium mb-3">Frontend</p>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-blue-500 text-white p-2 rounded-lg w-40 text-center">
                  <p className="text-sm">Interface Utilisateur</p>
                </div>
                
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                
                <div className="bg-blue-500 text-white p-2 rounded-lg w-40 text-center">
                  <p className="text-sm">Modal de Paiement</p>
                </div>
                
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
               
               <div className="bg-blue-500 text-white p-2 rounded-lg w-40 text-center">
                 <p className="text-sm">Service de Paiement</p>
               </div>
             </div>
           </div>
         </div>
         
         <div className="flex justify-center mb-6">
           <div className="grid grid-cols-2 gap-4">
             <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-center">
               <p className="text-xs">POST /payment/stripe/create-checkout</p>
             </div>
             <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-center">
               <p className="text-xs">POST /payment/paypal/create-payment</p>
             </div>
           </div>
         </div>
         
         {/* Backend API Section */}
         <div className="mb-8">
           <div className="border-2 border-yellow-300 dark:border-yellow-700 rounded-lg p-3 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30">
             <p className="text-sm font-medium mb-3">Backend API</p>
             
             <div className="flex flex-col items-center space-y-6">
               <div className="bg-green-500 text-white p-2 rounded-lg w-48 text-center">
                 <p className="text-sm">Endpoints de Paiement</p>
               </div>
               
               <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
               
               <div className="grid grid-cols-2 gap-8">
                 <div className="flex flex-col items-center">
                   <div className="bg-green-500 text-white p-2 rounded-lg w-48 text-center">
                     <p className="text-sm">Contrôleur de Paiement</p>
                   </div>
                   
                   <svg className="w-6 h-6 text-gray-400 my-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                   </svg>
                   
                   <div className="grid grid-cols-2 gap-2">
                     <div className="bg-green-600 text-white p-2 rounded-lg text-center">
                       <p className="text-xs">Modèle de Données Paiement</p>
                     </div>
                     <div className="bg-orange-500 text-white p-2 rounded-lg text-center">
                       <p className="text-xs">Adaptateurs de Paiement</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="flex flex-col items-center">
                   <div className="text-gray-500 text-sm">Webhooks de confirmation</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         {/* Payment Adapters */}
         <div className="mb-6">
           <div className="border-2 border-yellow-300 dark:border-yellow-700 rounded-lg p-3 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30">
             <p className="text-sm font-medium mb-3">Adaptateurs de Paiement</p>
             
             <div className="grid grid-cols-2 gap-8 justify-items-center">
               <div className="bg-orange-500 text-white p-2 rounded-lg w-40 text-center">
                 <p className="text-sm">Adaptateur Stripe</p>
               </div>
               <div className="bg-orange-500 text-white p-2 rounded-lg w-40 text-center">
                 <p className="text-sm">Adaptateur PayPal</p>
               </div>
             </div>
           </div>
         </div>
         
         {/* External Services */}
         <div>
           <div className="border-2 border-yellow-300 dark:border-yellow-700 rounded-lg p-3 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-30">
             <p className="text-sm font-medium mb-3">Services Externes</p>
             
             <div className="grid grid-cols-2 gap-8 justify-items-center">
               <div className="bg-red-500 text-white p-2 rounded-lg w-40 text-center">
                 <p className="text-sm">API Stripe</p>
               </div>
               <div className="bg-red-500 text-white p-2 rounded-lg w-40 text-center">
                 <p className="text-sm">API PayPal</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     
     {/* Key points */}
     <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
         <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
           </svg>
         </div>
         <p className="text-lg text-left">
           Intégration de Stripe et PayPal pour des transactions sécurisées.
         </p>
       </div>
       
       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
         <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
           </svg>
         </div>
         <p className="text-lg text-left">
           Suivi des paiements via un modèle de données dédié et gestion des transactions.
         </p>
       </div>
       
       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
         <div className="text-indigo-600 mr-3 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
           </svg>
         </div>
         <p className="text-lg text-left">
           Facilité d'extension pour ajouter de futures fonctionnalités premium.
         </p>
       </div>
     </div>
   </div>
 );
};

export default EnhancedPayment;