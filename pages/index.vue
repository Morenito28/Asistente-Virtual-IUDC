<template>
   <div class="flex min-h-screen">
<<<<<<< HEAD
      <!-- Lado izquierdo con fondo azul y logo -->
      <div class="w-1/2 bg-blue-700 flex justify-center items-center">
         <img src="https://universitariadecolombia.edu.co/wp-content/uploads/2022/02/imagenlogop2.png" alt="Logo"
            class="max-w-[80%]" />
      </div>

      <!-- Lado derecho con formulario en fondo blanco -->
      <div class="w-1/2 bg-white flex justify-center items-center">
         <form class="max-w-sm w-full p-8">
            <h1 class="flex m-5 py-5 text-blue-700 justify-center items-center font-bold text-6xl text center">Iniciar
               Sesion</h1>
            <!-- Correo -->
            <div class="relative mb-5">
               <input type="email" id="email"
                  class="peer block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-transparent dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required />
               <label for="email"
                  class="absolute left-2 top-3 text-sm text-gray-500 transition-all duration-200 transform scale-75 origin-[0] peer-focus:scale-75 peer-focus:-top-5 peer-focus:text-blue-600">Iniciar
                  Sesión</label>
            </div>

            <!-- Contraseña -->
            <div class="relative mb-5">
               <input type="password" id="password"
                  class="peer block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-transparent dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required />
               <label for="password"
                  class="absolute left-2 top-3 text-sm text-gray-500 transition-all duration-200 transform scale-75 origin-[0] peer-focus:scale-75 peer-focus:-top-5 peer-focus:text-blue-600">Contraseña</label>
            </div>

            <!-- Aceptación de términos -->
            <div class="flex items-start mb-5">
               <div class="flex items-center h-5">
                  <input id="terms" type="checkbox" value=""
                     class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                     required />
               </div>
               <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo con
                  los <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">términos y
                     condiciones</a></label>
            </div>

            <!-- Botón de registrarse -->
            <div class="flex justify-center">
               <button type="submit"
                  class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-[#00AAFF] to-[#004099] transition-all duration-300 hover:bg-[#004099]">
                  Iniciar Sesion
               </button>
            </div>
         </form>
      </div>
   </div>
</template>
=======
     <!-- Lado izquierdo con fondo azul y logo -->
     <div class="w-1/2 bg-gradient-to-r from-[#00AAFF] to-[#004099] flex justify-center items-center">
       <img src="https://universitariadecolombia.edu.co/wp-content/uploads/2022/02/imagenlogop2.png" alt="Logo" class="max-w-[80%]" />
     </div>
       
     <!-- Lado derecho con formulario en fondo blanco -->
     <div class="w-1/2 bg-white flex justify-center items-center">
       <form class="max-w-sm w-full p-1 px-16">
         
          <h1 class="uppercase flex m-1 py-5 text-blue-700 justify-center items-center font-bold text-6xl text-center">Asistente Virtual</h1>
          <h1 class="uppercase flex m-1 py-1 text-black text-xl justify-center items-center font-bold text-center">Iniciar Sesión</h1>
         <!-- Correo -->
         <div class="relative mb-5">
           <input type="email" id="email" class="peer block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-transparent dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
           <label for="email" class="absolute left-2 top-3 text-sm text-gray-500 transition-all duration-200 transform scale-75 origin-[0] peer-focus:scale-75 peer-focus:-top-5 peer-focus:text-blue-600">Iniciar Sesión</label>
         </div>
 
         <!-- Contraseña -->
         <div class="relative mb-5">
           <input type="password" id="password" class="peer block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-transparent dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
           <label for="password" class="absolute left-2 top-3 text-sm text-gray-500 transition-all duration-200 transform scale-75 origin-[0] peer-focus:scale-75 peer-focus:-top-5 peer-focus:text-blue-600">Contraseña</label>
         </div>
 
         <!-- Aceptación de términos -->
         <div class="flex items-start mb-5">
           <div class="flex items-center h-5">
             <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
           </div>
           <label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo con los <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">términos y condiciones</a></label>
         </div>
 
         <!-- Botón de registrarse -->
         <div class="flex justify-center">
           <button type="submit" class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-r from-[#00AAFF] to-[#004099] transition-all duration-300 hover:bg-[#004099]">
             Iniciar Sesion
           </button>
         </div>
       </form>
     </div>
   </div>
 </template>
>>>>>>> 6630261bef7632e37d5be03c9bc4da8fc44ded6f
